import React from 'react';
import renderer from 'react-test-renderer'

import { MilestonesProgressCircle } from './index';
const milestonesConfig = {
    "milestones" : [ {
        "key" : "SAVE_VAULT_CREDENTIALS",
        "description" : "save creds in vault",
        "displayText" : "Save your credentials",
        "urlPage" : "/reputation_settings",
        "urlSubDomain" : '',
        "sortIndex" : 1200,
        "productId" : 9,
        "completedTime" : 0
    }, {
        "key" : "TURN_ON_AUTO_REPLY",
        "description" : "turn on auto reply",
        "displayText" : "Turn on Auto Reply",
        "urlPage" : "/reputation_settings",
        "urlSubDomain" : '',
        "sortIndex" : 1300,
        "productId" : 6,
        "completedTime" : 0
    }],
    "milestoneCount" : 9,
    "completedMilestoneCount" : 1,
    "pollingPages" : [ {
        "milestoneKey" : "VERIFY_EMAIL",
        "urlPage" : "/user-profile",
        "urlSubDomain" : ''
    }, {
        "milestoneKey" : "VERIFY_EMAIL",
        "urlPage" : "/billing",
        "urlSubDomain" : ''
    }]
};

test('DOM elements are OK', () => {
    const component = renderer.create(
        (<MilestonesProgressCircle milestonesData={milestonesConfig}/>)
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
