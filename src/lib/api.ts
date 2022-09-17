import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const markdownDirectory = join(process.cwd(), 'src/markdown');

/**
 * 
 * 
 * @param slug 
 * @param fields 
 * @returns 
 */
export function getSectionBySlug(slug: string, fields: string[] = []){
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(markdownDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const items: any = {}
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}