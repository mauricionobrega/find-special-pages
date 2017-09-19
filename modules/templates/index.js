module.exports = (path, device, rules) => {
  'use strict';

  let templates = [];
  let actives = rules.filter((element) => {
    return element.active;
  });

  actives.filter((element) => {
    element.templateRules.find((rule) => {
      if (rule.userAgents.indexOf(device) + 1 && templates.indexOf(rule.template) < 0) {
        templates.push(`${path}/${rule.template}`);
      }
    });
  });

  return templates;
};