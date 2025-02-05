"use client"

export const measureText = (text: string) => {
    //measure text width for how far the scope should go in x
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const metrics = context.measureText(text);
      return metrics.width;
    }
    return 0;
  };