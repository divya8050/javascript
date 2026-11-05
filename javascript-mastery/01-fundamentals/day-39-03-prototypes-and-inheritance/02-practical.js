// Minimal Object.create implementation

function createWithProto(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const baseUser = {
  role: 'member',
  hasAccess() {
    return this.role === 'admin';
  }
};

const admin = createWithProto(baseUser);
admin.role = 'admin';

console.log('Admin access:', admin.hasAccess());

module.exports = { createWithProto };
