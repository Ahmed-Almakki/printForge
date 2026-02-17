// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { processModel } from '@/app/_lib/processGLTF';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

  if (!file.name.toLowerCase().endsWith('.glb')) {
    return NextResponse.json({ error: 'Only .glb files are allowed' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const publicUrl = await processModel(buffer, file.name);
    return NextResponse.json({ success: true, file: publicUrl });
  } catch (err) {
    console.error('Error processing model:', err);
    return NextResponse.json({ error: 'Failed to process model' }, { status: 500 });
  }
}
