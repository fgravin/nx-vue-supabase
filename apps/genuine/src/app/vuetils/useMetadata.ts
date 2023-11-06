import { supabase } from '../lib/supabase'
import { ref } from 'vue'
import type { Metadata } from '../types/supabase'

const allMetadatas = ref<Metadata[]>([])

/**
 * Retrieve all metadata for the signed in user
 */
async function fetchMetadatas(offset = 0, limit = 12) {
  try {
    const { data: metadatas, error } = await supabase
      .from('dataset_records')
      .select('*')
      .range(offset, offset + limit - 1)
      .order('record_updated', { ascending: false })

    if (error) {
      console.log('error', error)
      return
    }
    // handle for when no metadatas are returned
    if (metadatas === null) {
      allMetadatas.value = []
      return
    }
    // store response to allMetadatas
    allMetadatas.value = metadatas
    console.log('got metadatas!', allMetadatas.value)
  } catch (err) {
    console.error('Error retrieving data from db', err)
  }
}

/**
 *  Add a new metadata to supabase
 */
async function addMetadata(metadata: Metadata): Promise<null | Metadata> {
  try {
    const { data, error } = await supabase
      .from('dataset_records')
      .insert(metadata)
      .single()

    if (error) {
      alert(error.message)
      console.error('There was an error inserting', error)
      return null
    }
    console.log('created a new metadata')
    return metadata
  } catch (err) {
    alert('Error')
    console.error('Unknown problem inserting to db', err)
    return null
  }
}

/**
 *  Deletes a metadata via its id
 */
async function deleteMetadata(metadata: Metadata) {
  try {
    await supabase.from('metadatas').delete().eq('id', metadata.id)
    console.log('deleted metadata', metadata.id)
  } catch (error) {
    console.error('error', error)
  }
}

export { allMetadatas, fetchMetadatas, addMetadata, deleteMetadata }
