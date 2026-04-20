import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Image Placeholder";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ searchParams }: { searchParams?: Record<string, string> }) {
  const title = (searchParams && searchParams.title) || "Image Placeholder Test";
  const route = (searchParams && searchParams.route) || "/";

  // try to load a local font if present; fall back to system fonts
  let interData: ArrayBuffer | undefined;
  try {
    const fontPath = join(process.cwd(), "assets", "Inter-SemiBold.ttf");
    interData = await readFile(fontPath).then((b) => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
  } catch (e) {
    interData = undefined;
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0ea5e9,#7c3aed)",
          color: "white",
          fontFamily: interData ? "Inter, Arial, sans-serif" : "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 28, opacity: 0.9 }}>{route === "/" ? `/${route}` : `/${route}`}</div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 18 }}>{title}</div>
          <div style={{ fontSize: 20, marginTop: 12, opacity: 0.85 }}>Image Placeholder Test</div>
        </div>
      </div>
    ),
    interData
      ? {
          ...size,
          fonts: [
            {
              name: "Inter",
              data: interData as any,
              style: "normal",
              weight: 700,
            },
          ],
        }
      : { ...size }
  );
}
