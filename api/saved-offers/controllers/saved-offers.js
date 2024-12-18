'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  find: async (ctx) => {
    if (
      ctx.query.email !== ctx.state.user.email
      && ctx.state.user.role.type !== 'moderator'
    ) {
      return [];
    }
    if (!ctx.query.email) {
      delete ctx.query.email;
      ctx.query._limit = 10000;
    }

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services['saved-offers'].search(ctx.query);
    } else {
      entities = await strapi.services['saved-offers'].find(ctx.query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models['saved-offers'] }));
  }
};
