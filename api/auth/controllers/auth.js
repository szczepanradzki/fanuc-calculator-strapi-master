'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const _ = require("lodash");
module.exports = {
  async verifyToken(ctx) {
    const params = _.assign(ctx.request.body);
    console.log(params);
    const payload = await strapi.plugins["users-permissions"].services.jwt.verify(params.token)
    strapi.query('user', 'users-permissions').update({id: payload.id}, {confirmed: true});
    ctx.send(payload);
  },
};
