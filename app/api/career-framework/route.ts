import { NextResponse } from 'next/server';
import { getCareerFrameworkData } from '@/lib/career-data';

export async function GET() {
    try {
        const roles = await getCareerFrameworkData();
        return NextResponse.json(roles);
    } catch (error) {
        console.error('Error fetching career framework data:', error);
        return NextResponse.json([], { status: 200 }); // Return empty array on error
    }
}
