import cpp from 'programming-languages-logos/src/cpp/cpp.svg';
import csharp from 'programming-languages-logos/src/csharp/csharp.svg';
import typescript from 'programming-languages-logos/src/typescript/typescript.svg';
import javascript from 'programming-languages-logos/src/javascript/javascript.svg';

const langNameCodes = new Map<string, string>([
    ['C++', 'cpp'],
    ['C#', 'csharp'],
    ['TypeScript', 'typescript'],
    ['JavaScript', 'javascript']
])

export const getLangCode = (lang: string): string => {
    if (langNameCodes.has(lang))
        return langNameCodes.get(lang)!;
    return 'cpp';
}

export const langLogos = new Map<string, string>([
    ['cpp', cpp],
    ['csharp', csharp],
    ['typescript', typescript],
    ['javascript', javascript]
])

export const getLangImage = (_lang: string) => {
    const lang = getLangCode(_lang);
    if (langLogos.has(lang)) {
        console.log(`language ${lang} found`);
        return langLogos.get(lang);
    } 
    console.log(`Language ${lang} not found`);
    return langLogos.get('cpp');
}

