module.exports = (options) => {
  'use strict';

  let templates = [];
  let actives = options.rules.filter((element) => {
    return element.active;
  });

  actives.filter((element) => {
    element.templateRules.find((rule) => {
      if (rule.userAgents.indexOf(options.device) + 1 && templates.indexOf(rule.template) < 0) {
        templates.push(`${options.path}/${rule.template}`);
      }
    });
  });

  return templates;
};