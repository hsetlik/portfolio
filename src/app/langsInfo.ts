import cpp from 'programming-languages-logos/src/cpp/cpp.svg';
import csharp from 'programming-languages-logos/src/csharp/csharp.svg';
import typescript from 'programming-languages-logos/src/typescript/typescript.svg';
import javascript from 'programming-languages-logos/src/javascript/javascript.svg';
import css from 'programming-languages-logos/src/css/css.svg';
import html from 'programming-languages-logos/src/html/html.svg';

const langNameCodes = new Map<string, string>([
    ['C++', 'cpp'],
    ['C#', 'csharp'],
    ['TypeScript', 'typescript'],
    ['JavaScript', 'javascript'],
    ['CSS3', 'css'],
    ['HTML5', 'html']
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
    ['javascript', javascript],
    ['css', css],
    ['html', html]
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

