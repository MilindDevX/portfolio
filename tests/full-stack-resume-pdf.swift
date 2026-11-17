// ABOUTME: Checks the full-stack résumé PDF: one page, selectable current facts, no stale claims, and the right portfolio link.
import Foundation
import PDFKit

let path = CommandLine.arguments.dropFirst().first ?? "public/docs/Milind_Bansal_Full_Stack_Resume.pdf"
guard let document = PDFDocument(url: URL(fileURLWithPath: path)) else { fatalError("Cannot open resume") }
precondition(document.pageCount == 1, "Resume must fit one page")
let text = document.string ?? ""
for fact in ["Milind Bansal", "milindsk8r@gmail.com", "CGPA: 9.28 / 10", "skipq", "FeedbackOS", "MedMarket", "evalbar", "SKIP LOCKED", "Vercel Queues", "JWT", "C-MAPSS", "12 merged pull requests", "five-person", "Amazon ML Challenge 2026", "55 integration tests"] {
    precondition(text.localizedCaseInsensitiveContains(fact), "Missing selectable fact: \(fact)")
}
for stale in ["8 merged pull requests", "RouteLens", "BullMQ", "58-test", "year-long", "nst.rishihood.edu.in", "not employment"] {
    precondition(!text.contains(stale), "Unsupported or obsolete text: \(stale)")
}
let page = document.page(at: 0)!
let links = page.annotations.filter { $0.url != nil }
for (destination, label) in [("https://portfolio-milind.vercel.app/", "Portfolio"), ("mailto:milindsk8r@gmail.com", "milindsk8r@gmail.com"), ("https://github.com/MilindDevX", "GitHub"), ("https://www.linkedin.com/in/milind-bansal-177606244/", "LinkedIn")] {
    let link = links.first { $0.url?.absoluteString == destination }
    precondition(link != nil, "Missing link: \(destination)")
    precondition(page.selection(for: link!.bounds)?.string?.contains(label) == true, "Incorrect link label: \(label)")
}
for destination in ["https://github.com/MilindDevX/skipq", "https://github.com/MilindDevX/MedMarket", "https://med-market-self.vercel.app/", "https://feedbackos.vercel.app/"] {
    precondition(links.contains { $0.url?.absoluteString == destination }, "Missing project link: \(destination)")
}
precondition(!links.contains { $0.url?.absoluteString == "https://portfolio-milind.vercel.app/ai" }, "Full-stack resume opens AI portfolio")
print("PASS: one page, current facts, \(links.count) clickable links")
