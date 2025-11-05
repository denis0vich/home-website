import json
import struct
import zlib

def parse_figma_file(filepath):
    """Attempt to parse Figma .fig file format"""
    with open(filepath, 'rb') as f:
        data = f.read()
    
    # Check file header
    if data.startswith(b'fig-kiwie'):
        print("Detected Figma format")
        # Skip the header
        header_len = len(b'fig-kiwie\x00\x00\x00')
        compressed_data = data[header_len:]
        
        # Try different decompression methods
        try:
            # Try zlib
            decompressed = zlib.decompress(compressed_data)
            print("Successfully decompressed with zlib")
            return json.loads(decompressed)
        except:
            try:
                # Try without header skip
                decompressed = zlib.decompress(data)
                print("Successfully decompressed (no header skip)")
                return json.loads(decompressed)
            except Exception as e:
                print(f"Decompression failed: {e}")
                return None
    
    # Try direct JSON
    try:
        return json.loads(data)
    except:
        return None

# Try to parse
result = parse_figma_file('figma_extracted/canvas.fig')
if result:
    print("\n=== Structure Overview ===")
    print(f"Top-level keys: {list(result.keys())[:10] if isinstance(result, dict) else 'Not a dict'}")
    
    # Save to file for inspection
    with open('figma_design_data.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    print("\nSaved parsed data to figma_design_data.json")
else:
    print("Could not parse the file. The format may require a specialized parser.")
    print("You may need to use Figma's API or export the design as images/HTML.")

