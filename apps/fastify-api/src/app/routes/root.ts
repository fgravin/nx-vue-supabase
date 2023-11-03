import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { resetIndex, search } from '../services/elasticsearch/es.client'

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/api/index/reset',
    async function (request: FastifyRequest, reply: FastifyReply) {
      resetIndex();
      return { message: 'Index generation succeed' };
    }
  );
  fastify.get(
    '/api/index/search',
    async function (request: FastifyRequest, reply: FastifyReply) {
return search()
    }
  );
}
