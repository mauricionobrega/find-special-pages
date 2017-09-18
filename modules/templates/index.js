module.exports = (path) => {
  'use strict';

  let templates = [];
  const json = require('./rules.json');
  const actives = json.filter((element) => {
    return element.active;
  });

  actives.filter((element) => {
    const mob = element.templateRules.find((rule) => {
      if (rule.name === 'mobile' && templates.indexOf(rule.template) === -1) {
        templates.push(`${path}/${rule.template}`);
      }
    });
  });

  return templates;
};