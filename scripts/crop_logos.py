import os
from PIL import Image

DOWNLOADS = r'C:\Users\Leo\Downloads'
TRANS_PNG = os.path.join(DOWNLOADS, 'Black and White Inverted D Logo (1).png')
OPAQUE_PNG = os.path.join(DOWNLOADS, 'Black and White Inverted D Logo.png')
TRANS_SVG = os.path.join(DOWNLOADS, 'Black and White Inverted D Logo (1).svg')
OPAQUE_SVG = os.path.join(DOWNLOADS, 'Black and White Inverted D Logo.svg')

# 1. Inspect Transparent PNG
trans_img = Image.open(TRANS_PNG)
bbox = trans_img.getbbox()
print("Transparent PNG bbox:", bbox)
min_x, min_y, max_x, max_y = bbox
w = max_x - min_x
h = max_y - min_y
cx = (min_x + max_x) / 2
cy = (min_y + max_y) / 2
print(f"Artwork width: {w}, height: {h}, center: ({cx}, {cy})")

# Let's crop with a square bounding box centered at (cx, cy)
# Max dimension is h (856). Let's give ~10% padding so side is 960
side = 960
x0 = int(round(cx - side / 2))
y0 = int(round(cy - side / 2))
x1 = x0 + side
y1 = y0 + side

cropped_trans = trans_img.crop((x0, y0, x1, y1))
print("Cropped transparent size:", cropped_trans.size)

# Also crop opaque PNG with same box
opaque_img = Image.open(OPAQUE_PNG)
cropped_opaque = opaque_img.crop((x0, y0, x1, y1))
print("Cropped opaque size:", cropped_opaque.size)

# Ensure output directories exist
os.makedirs('app/src/main/res/drawable-nodpi', exist_ok=True)
os.makedirs('app/src/main/assets/web', exist_ok=True)

# Save cropped_trans as dashdrop_logo_mark.png (512x512)
mark_512 = cropped_trans.resize((512, 512), Image.Resampling.LANCZOS)
mark_512.save('app/src/main/res/drawable-nodpi/dashdrop_logo_mark.png', 'PNG')
print("Saved app/src/main/res/drawable-nodpi/dashdrop_logo_mark.png")

# Generate launcher mipmaps
# For adaptive foreground: Android requires 108x108 dp, safe area is inner 72dp (66.6% circle)
# So inside a 108x108 canvas, the logo should occupy roughly the central 64x64 to 72x72 dp.
# Mipmap densities for 108x108 adaptive foreground:
# mdpi: 108x108
# hdpi: 162x162
# xhdpi: 216x216
# xxhdpi: 324x324
# xxxhdpi: 432x432
foreground_densities = {
    'mipmap-mdpi': 108,
    'mipmap-hdpi': 162,
    'mipmap-xhdpi': 216,
    'mipmap-xxhdpi': 324,
    'mipmap-xxxhdpi': 432,
}

for folder, total_size in foreground_densities.items():
    dest_dir = os.path.join('app/src/main/res', folder)
    os.makedirs(dest_dir, exist_ok=True)
    
    # Adaptive foreground: transparent canvas of total_size x total_size,
    # with logo in center at 68% of total_size
    fg_canvas = Image.new('RGBA', (total_size, total_size), (0, 0, 0, 0))
    logo_size = int(round(total_size * 0.68))
    logo_resized = cropped_trans.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    offset = (total_size - logo_size) // 2
    fg_canvas.paste(logo_resized, (offset, offset), logo_resized)
    fg_canvas.save(os.path.join(dest_dir, 'ic_launcher_foreground.webp'), 'WEBP')

# Legacy app icons (square / round):
# mdpi: 48x48
# hdpi: 72x72
# xhdpi: 96x96
# xxhdpi: 144x144
# xxxhdpi: 192x192
icon_densities = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
}

for folder, icon_size in icon_densities.items():
    dest_dir = os.path.join('app/src/main/res', folder)
    # Legacy icon: black background + logo
    icon_canvas = Image.new('RGBA', (icon_size, icon_size), (0, 0, 0, 255))
    logo_size = int(round(icon_size * 0.82))
    logo_resized = cropped_trans.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    offset = (icon_size - logo_size) // 2
    icon_canvas.paste(logo_resized, (offset, offset), logo_resized)
    icon_canvas.save(os.path.join(dest_dir, 'ic_launcher.webp'), 'WEBP')
    
    # Round icon: circular mask
    mask = Image.new('L', (icon_size, icon_size), 0)
    from PIL import ImageDraw
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, icon_size - 1, icon_size - 1), fill=255)
    round_canvas = Image.new('RGBA', (icon_size, icon_size), (0, 0, 0, 0))
    round_canvas.paste(icon_canvas, (0, 0), mask)
    round_canvas.save(os.path.join(dest_dir, 'ic_launcher_round.webp'), 'WEBP')

print("Generated launcher mipmaps!")
