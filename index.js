let = templates = [];
const json = require("./rules.json");
const actives = json.filter(function(element) {
    return element.active;
});

actives.filter(function(element) {
    const mob = element.templateRules.find(function(rule) {
        if (rule.name === 'mobile' && templates.indexOf(rule.template) === -1) {
            templates.push(rule.template)
        }
    });
});

console.log(templates);
console.log(templates.length);