import fs from 'fs';
import path from 'path';

export interface Role {
    title: string;
    slug: string;
    track: 'IC' | 'Management';
    content: string;
    summary: string;
}

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

export async function getCareerFrameworkData(): Promise<Role[]> {
    // Adjust path to point to the parent directory where career_framework.md is located
    const filePath = path.join(process.cwd(), '../career_framework.md');

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const roles: Role[] = [];

        let currentTrack: 'IC' | 'Management' = 'IC';
        let currentRole: Partial<Role> | null = null;
        let currentContent: string[] = [];

        for (const line of lines) {
            // Detect Track
            if (line.trim() === '## IC Track') {
                currentTrack = 'IC';
                continue;
            } else if (line.trim() === '## Management Track') {
                currentTrack = 'Management';
                continue;
            }

            // Detect Role Start
            if (line.startsWith('### ')) {
                // Save previous role if exists
                if (currentRole) {
                    currentRole.content = currentContent.join('\n').trim();
                    roles.push(currentRole as Role);
                }

                // Start new role
                const title = line.replace('### ', '').trim();
                // Extract abbreviation if present e.g. "Graduate Software Engineer (GSE)" -> "graduate-software-engineer"
                // Actually let's just slugify the whole title for uniqueness
                const slug = slugify(title);

                currentRole = {
                    title,
                    slug,
                    track: currentTrack,
                    summary: '',
                };
                currentContent = [];
            } else if (currentRole) {
                // Accumulate content
                currentContent.push(line);

                // Try to extract summary from "Primary Focus"
                if (line.trim().startsWith('- **Primary Focus:**')) {
                    currentRole.summary = line.replace('- **Primary Focus:**', '').trim();
                }
            }
        }

        // Save last role
        if (currentRole) {
            currentRole.content = currentContent.join('\n').trim();
            roles.push(currentRole as Role);
        }

        return roles;
    } catch (error) {
        console.error('Error reading career framework file:', error);
        return [];
    }
}

export async function getRoleBySlug(slug: string): Promise<Role | undefined> {
    const roles = await getCareerFrameworkData();
    return roles.find((role) => role.slug === slug);
}
