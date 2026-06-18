const { TRANSLATE_MAP } = require('./CDA/src/utils/translator');

const languages = ['pt', 'um', 'ki', 'kk', 'ch', 'ng', 'kw', 'nh', 'fi'];
const anomalies = [];

for (const [key, translations] of Object.entries(TRANSLATE_MAP)) {
    for (const lang of languages) {
        if (!translations[lang]) {
            anomalies.push(`Missing translation for [${key}] in language [${lang}]`);
        } else if (translations[lang] === translations['pt']) {
            // Only alert if it's not a technical term (like QR Code, BI, etc)
            if (!key.match(/QR Code|BI|NIF|AGT|SME|S OC/i)) {
                anomalies.push(`Fake translation for [${key}] in [${lang}]: matches Portuguese`);
            }
        }
    }
}

if (anomalies.length > 0) {
    console.log(`Found ${anomalies.length} anomalies:`);
    anomalies.forEach(a => console.log(a));
} else {
    console.log("No obvious anomalies found in TRANSLATE_MAP.");
}
