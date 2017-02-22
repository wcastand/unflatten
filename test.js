const { unflatten, flatten } = require('./index');
const tape = require('tape');

tape('unflatten the object with one level', t => {
  t.plan(1);

  const flat = {
    id: 24,
    userId: 23,
    isRead: true,
    'data.id': 34,
    'data.comment': 'teokef',
  }

  const unflat = {
    id: 24,
    userId: 23,
    isRead: true,
    data: {
      id: 34,
      comment: 'teokef',
    }
  }

  t.deepEqual(unflatten(flat), unflat);

});

tape('flatten the object with one level', t => {
    t.plan(1);

  const flat = {
    id: 24,
    userId: 23,
    isRead: true,
    'data.id': 34,
    'data.comment': 'teokef',
  }

  const unflat = {
    id: 24,
    userId: 23,
    isRead: true,
    data: {
      id: 34,
      comment: 'teokef',
    }
  }

  t.deepEqual(flatten(unflat), flat);
})

tape('unflatten the object with many levels', t => {
  t.plan(1);

  const n = { type: 'reminder',
    isRead: false,
    userId: 59,
    'data.id': 44,
    'data.date': '2016-11-18T08:58:00.000Z',
    'data.comment': 'fezf',
    'data.data.is_urgent': false,
    'data.data.contact_id': 6909,
    'data.is_done': false,
    'data.user_id': 59,
    'data.created_at': '2016-11-18T08:56:39.228Z',
    'data.updated_at': '2016-11-18T08:56:39.228Z',
    'data.token': 'dJ9TDQTkIzY:APA91bG5LDDzvvRSxggFI-tJ8ppFE7GHsk3KEA_h45NJDELWdAph8k4C-YUxMtW5EDrqgTMbuWAenh8ABwD16rAoPxKeF9e6XW2xJwB_iSt-uGOzYZr1excVWLibYOxVp-UM7f1je4UK',
    'data.contact.id': 6909,
    'data.contact.firstname': 'Adam',
    'data.contact.lastname': 'DA SILVA',
    'data.contact.company_name': 'EXTIA'
  }

  const expected = {
    type: 'reminder',
    userId: 59,
    isRead: false,
    data: {
      id: 44,
      date: '2016-11-18T08:58:00.000Z',
      comment: 'fezf',
      data: {
        is_urgent: false,
        contact_id: 6909,
      },
      is_done: false,
      user_id: 59,
      created_at: '2016-11-18T08:56:39.228Z',
      updated_at: '2016-11-18T08:56:39.228Z',
      token: 'dJ9TDQTkIzY:APA91bG5LDDzvvRSxggFI-tJ8ppFE7GHsk3KEA_h45NJDELWdAph8k4C-YUxMtW5EDrqgTMbuWAenh8ABwD16rAoPxKeF9e6XW2xJwB_iSt-uGOzYZr1excVWLibYOxVp-UM7f1je4UK',
      contact: {
        id: 6909,
        firstname: 'Adam',
        lastname: 'DA SILVA',
        company_name: 'EXTIA'
      }
    }
  }

  t.deepEqual(unflatten(n), expected);
});


tape('flatten the object with many levels', t => {
  t.plan(1);

  const flat = { type: 'reminder',
    isRead: false,
    userId: 59,
    'data.id': 44,
    'data.date': '2016-11-18T08:58:00.000Z',
    'data.comment': 'fezf',
    'data.data.is_urgent': false,
    'data.data.contact_id': 6909,
    'data.is_done': false,
    'data.user_id': 59,
    'data.created_at': '2016-11-18T08:56:39.228Z',
    'data.updated_at': '2016-11-18T08:56:39.228Z',
    'data.token': 'dJ9TDQTkIzY:APA91bG5LDDzvvRSxggFI-tJ8ppFE7GHsk3KEA_h45NJDELWdAph8k4C-YUxMtW5EDrqgTMbuWAenh8ABwD16rAoPxKeF9e6XW2xJwB_iSt-uGOzYZr1excVWLibYOxVp-UM7f1je4UK',
    'data.contact.id': 6909,
    'data.contact.firstname': 'Adam',
    'data.contact.lastname': 'DA SILVA',
    'data.contact.company_name': 'EXTIA'
  }

  const unflat = {
    type: 'reminder',
    userId: 59,
    isRead: false,
    data: {
      id: 44,
      date: '2016-11-18T08:58:00.000Z',
      comment: 'fezf',
      data: {
        is_urgent: false,
        contact_id: 6909,
      },
      is_done: false,
      user_id: 59,
      created_at: '2016-11-18T08:56:39.228Z',
      updated_at: '2016-11-18T08:56:39.228Z',
      token: 'dJ9TDQTkIzY:APA91bG5LDDzvvRSxggFI-tJ8ppFE7GHsk3KEA_h45NJDELWdAph8k4C-YUxMtW5EDrqgTMbuWAenh8ABwD16rAoPxKeF9e6XW2xJwB_iSt-uGOzYZr1excVWLibYOxVp-UM7f1je4UK',
      contact: {
        id: 6909,
        firstname: 'Adam',
        lastname: 'DA SILVA',
        company_name: 'EXTIA'
      }
    }
  }

  t.deepEqual(flatten(unflat), flat);
});
