import { roles, getRoleBySlug as getRoleBySlugFromData, type RoleData } from './roles-data';

export interface Role {
    title: string;
    slug: string;
    track: 'IC' | 'Management';
    content: string;
    summary: string;
}

export function getCareerFrameworkData(): Role[] {
    return roles;
}

export function getRoleBySlug(slug: string): Role | undefined {
    return getRoleBySlugFromData(slug);
}
