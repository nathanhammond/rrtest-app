import { test } from 'qunit';
import moduleForAcceptance from 'rrtest-app/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
import Ember from 'ember';

moduleForAcceptance('Acceptance | foo');

test("can register queryParam urls", function(assert){
  var queryCalled  = false;
  var noQueryCalled = false;

  var server = new Pretender();
  server.get('/some/path?a=1&b=2', function(){
    queryCalled = true;
  });
  server.get('/some/path', function(){
    noQueryCalled = true;
  });

  Ember.$.ajax({url: '/some/path?a=1&b=2'});
  assert.ok(!noQueryCalled, 'should be false');
  assert.ok(queryCalled, 'should be true');
});
