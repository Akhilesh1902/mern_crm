const User = require('../../models/user.model');
const { sendVerificationEmail } = require('../emails/email.service');

async function readUsers(filter, projection, options) {
  try {
    return await User.find(filter, projection, options);
  } catch (err) {
    throw err;
  }
}

// A note on insertOne vs. save()
//    save() is and always have been the preferred approach when adding docs to the db.
//    It provides validation and middleware and the entire update happens as a single unit.
//    So why use insertOne instead ? two reasons:
//        1. Justify the use of Joi for validation.
//        2. Simple, slightly fast insertions to the db.
//    This said, chances of bulkwriting users are slim,
//    For now, registering users uses save(), 'validated twice ¯\_(ツ)_/¯'
//    See: ../../controllers/user.controller.js#register}
//    updating users uses updateOne, see below.

async function writeUsers(docs, operation, filters) {
  try {
    const arr = Array.isArray(docs) ? docs : [docs];

    const bulkOps = arr.reduce((obj, current) => {
      // eslint-disable-next-line no-param-reassign
      obj[operation] = {
        filter: filters,
        update: operation === 'updateOne' ? current : undefined, // Add update only for updates
        document: operation === 'insertOne' ? current : undefined, // Add document only for inserts
      };
      return obj;
    }, {});

    return await User.bulkWrite([bulkOps], { ordered: true });
  } catch (err) {
    throw err;
  }
}

async function updateWithoutReturn(userId, update) {
  try {
    return await User.updateOne({ _id: userId }, { $set: update });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  readUsers,
  writeUsers,
  updateWithoutReturn,
};
