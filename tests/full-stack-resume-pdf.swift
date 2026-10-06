// ABOUTME: Checks full-stack resume readability, role-specific links, education alignment, and renders visual QA.
import Foundation
import PDFKit
import AppKit

let path = CommandLine.arguments.dropFirst().first ?? "public/docs/Milind_Bansal_Full_Stack_Resume.pdf"
guard let document = PDFDocument(url: URL(fileURLWithPath: path)) else { fatalError("Cannot open resume") }
precondition(document.pageCount == 1, "Resume must fit one page")
let text = document.string ?? ""
for fact in ["Milind Bansal", "milindsk8r@gmail.com", "portfolio-milind.vercel.app", "Projects", "FeedbackOS", "MedMarket", "RouteLens", "9.28/10", "Solo project", "Amazon ML Challenge 2026", "C-MAPSS", "OpenAI", "BullMQ", "JWT"] {
    precondition(text.localizedCaseInsensitiveContains(fact), "Missing selectable fact: \(fact)")
}
for unsupported in ["1.2s", "58-test", "PostgreSQL constraint", "3rd-year", "nst.rishihood.edu.in", "Selected Projects", "Hacktoberfest", "not employment"] {
    precondition(!text.contains(unsupported), "Unsupported or obsolete text: \(unsupported)")
}
let page = document.page(at: 0)!
let college = document.findString("Newton School of Technology at Rishihood University", withOptions: []).first!
let cgpa = document.findString("CGPA: 9.28/10", withOptions: []).first!
let period = document.findString("2024-2028", withOptions: []).first!
let course = document.findString("B.Tech in Computer Science and Artificial Intelligence", withOptions: []).first!
precondition(abs(college.bounds(for: page).maxY-period.bounds(for: page).maxY) < 3, "College/timeline misaligned")
precondition(abs(course.bounds(for: page).maxY-cgpa.bounds(for: page).maxY) < 3, "Course/CGPA misaligned")
let links = page.annotations.filter { $0.url != nil }
for (destination, label) in [("https://portfolio-milind.vercel.app/", "portfolio-milind.vercel.app"), ("mailto:milindsk8r@gmail.com", "milindsk8r@gmail.com"), ("https://github.com/MilindDevX", "github.com/MilindDevX"), ("https://www.linkedin.com/in/milind-bansal-177606244/", "linkedin.com/in/milind-bansal")] {
    let link=links.first { $0.url?.absoluteString == destination }
    precondition(link != nil, "Missing link: \(destination)")
    precondition(page.selection(for: link!.bounds)?.string?.contains(label) == true, "Incorrect link label: \(label)")
}
precondition(!links.contains { $0.url?.absoluteString == "https://portfolio-milind.vercel.app/ai" }, "Full-stack resume opens AI portfolio")
let image = page.thumbnail(of: NSSize(width: 1190, height: 1684), for: .mediaBox)
let bitmap = NSBitmapImageRep(data: image.tiffRepresentation!)!
try bitmap.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: "/private/tmp/full-stack-resume-qa.png"))
print("PASS: one page, selectable content, aligned education, \(links.count) clickable links; QA rendered")
