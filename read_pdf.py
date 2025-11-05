import sys
try:
    import PyPDF2
    has_pypdf2 = True
except ImportError:
    has_pypdf2 = False

try:
    import pdfplumber
    has_pdfplumber = True
except ImportError:
    has_pdfplumber = False

if has_pdfplumber:
    import pdfplumber
    pdf_path = "DREAM HOME CONTENT/[THSACAM] Chapter I, II, & III (1).pdf"
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {i+1} ---\n{text}\n"
    with open("pdf_content.txt", "w", encoding="utf-8") as f:
        f.write(full_text)
    print(f"Extracted {len(pdf.pages)} pages to pdf_content.txt")
elif has_pypdf2:
    import PyPDF2
    pdf_path = "DREAM HOME CONTENT/[THSACAM] Chapter I, II, & III (1).pdf"
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        full_text = ""
        for i, page in enumerate(pdf_reader.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {i+1} ---\n{text}\n"
    with open("pdf_content.txt", "w", encoding="utf-8") as f:
        f.write(full_text)
    print(f"Extracted {len(pdf_reader.pages)} pages to pdf_content.txt")
else:
    print("Neither PyPDF2 nor pdfplumber is available. Please install one: pip install pdfplumber")
    sys.exit(1)

