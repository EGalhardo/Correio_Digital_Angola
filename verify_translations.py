import re

with open('CDA/src/utils/translator.ts', 'r') as f:
    content = f.read()

pattern = re.compile(r'("[^"]+"):\s*\{([^{}]*)\}', re.MULTILINE)
matches = pattern.findall(content)

anomalies = []
languages = ['pt', 'um', 'ki', 'kk', 'ch', 'ng', 'kw', 'nh', 'fi']

for key, trans_block in matches:
    lang_pattern = re.compile(r'(\w+):\s*"([^"]*)"')
    trans_matches = lang_pattern.findall(trans_block)
    translations = {lang: val for lang, val in trans_matches}
    pt_val = translations.get('pt')
    
    for lang in languages:
        val = translations.get(lang)
        if lang == 'pt': continue # Ignore PT
        if val and val == pt_val and not any(x in key for x in ['QR Code', 'BI', 'NIF', 'AGT', 'SME', 'SOC']):
            anomalies.append(f"Fake: [{key}] in [{lang}]")

if anomalies:
    print(f"Found {len(anomalies)} fake translations for non-PT languages.")
    for a in anomalies:
        print(a)
else:
    print("Success: No fake translations found for non-PT languages.")
