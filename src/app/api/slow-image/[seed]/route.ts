export async function GET(
  _req: Request,
  { params }: Readonly<{ params: Promise<{ seed: string }> }>,
) {
  const { seed } = await params;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const resImg = await fetch(`https://picsum.photos/id/${seed}/200/300`);
  const blob = await resImg.blob();

  return new Response(blob, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}