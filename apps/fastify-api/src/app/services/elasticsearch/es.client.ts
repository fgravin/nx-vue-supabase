import { Client } from 'es';
import * as fs from 'fs';
import { logger } from 'nx/src/utils/logger'
import { MappingTypeMapping } from 'es/lib/api/types'

const INDEX_ID = 'dataset'
const index = INDEX_ID

const mappings: MappingTypeMapping= {
    "properties": {
      "any": {
        "type": "text"
      },
      "id": {
        "type": "keyword"
      },
      "docType": {
        "type": "keyword"
      },
      "featureTypeId": {
        "type": "keyword"
      },
      "geometry": {
        "type": "geo_point",
        "ignore_malformed": true
      },
      "location": {
        "type": "geo_point"
      }
    }
}

const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'p=ulSK7bQxCbbw0qVZ-z',
  },
  tls: {
    ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false,
  },
});

export async function resetIndex() {
  await client.indices.delete({ index }).catch(() => logger.log('index does not exist'));
  await client.indices.create({ index, mappings} );
  await indexDocuments()
}

async function  indexDocuments() {
  await client.create({
    index,
    id: 'my_document_id',
    body: {
      "type": "Feature",
        "prop0": "value0",
        "prop1": 1,
      "geometry": [
        -71.00455007072564,
        42.364101185471185
      ]
    }
  })

}
export async function search() {
  return client.search({
    index,
    "aggregations": {
      "large-grid": {
        "geotile_grid": {
          "field": "geometry",
          "precision": 4
        }
      }
    },
    query: {
      match: {
        prop0: 'value0'
      }
    }
  })
}
