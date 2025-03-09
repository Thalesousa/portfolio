export async function UseGetImageSize(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
  });
}
