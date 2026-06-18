import re

with open('CDA/src/utils/translator.ts', 'r') as f:
    content = f.read()

# Find each TRANSLATE_MAP entry: "Key": { ... }
pattern = re.compile(r'("[^"]+"):\s*\{([^{}]*)\}', re.MULTILINE)

def clean_block(key, block):
    # Find all translations in the block: lang: "value"
    lang_pattern = re.compile(r'(\w+):\s*"([^"]*)"')
    trans_matches = lang_pattern.findall(block)
    
    translations = {lang: val for lang, val in trans_matches}
    pt_val = translations.get('pt')
    
    if not pt_val:
        return block
    
    # Keep only translations that are DIFFERENT from Portuguese
    # Except for technical terms
    cleaned_lines = []
    for lang, val in trans_matches:
        if lang == 'pt':
            cleaned_lines.append(f'    {lang}: "{val}",')
        elif val != pt_val or any(x in key for x in ['QR Code', 'BI', 'NIF', 'AGT', 'SME', 'SOC']):
            cleaned_lines.append(f'    {lang}: "{val}",')
            
    return "{\n" + "\n".join(cleaned_lines) + "\n  }"

def replace_match(match):
    key = match.group(1)
    block = match.group(2)
    return f'{key}: {clean_block(key, block)}'

new_content = pattern.sub(replace_match, content)

with open('CDA/src/utils/translator.ts', 'w') as f:
    f.write(new_content)
