// ABOUTME: Checks the AI résumé PDF: one page, selectable current facts, no stale claims, and labelled clickable links.
import Foundation
import PDFKit

let path = CommandLine.arguments.dropFirst().first ?? "public/docs/Milind_Bansal_AI_Internship_Resume.pdf"
guard let document = PDFDocument(url: URL(fileURLWithPath: path)) else { fatalError("Cannot open resume PDF") }
precondition(document.pageCount == 1, "Expected one page; got \(document.pageCount)")
let text = document.string ?? ""
for fact in ["Milind Bansal", "milindsk8r@gmail.com", "CGPA: 9.28 / 10", "evalbar", "FeedbackOS", "C-MAPSS", "skipq", "12 merged pull requests", "Five-person", "Amazon ML Challenge", "79 tests", "55 integration tests", "0.819", "0.870", "13.5", "7.5"] {
    precondition(text.localizedCaseInsensitiveContains(fact), "PDF text missing or fragmented: \(fact)")
}
for stale in ["8 merged pull requests", "TruthLens", "year-long", "nst.rishihood.edu.in", "Summary"] {
    precondition(!text.contains(stale), "Stale or private text: \(stale)")
}
let page = document.page(at: 0)!
let links = page.annotations.filter { $0.url != nil }
let destinations = links.compactMap { $0.url?.absoluteString }
for destination in ["https://portfolio-milind.vercel.app/ai", "mailto:milindsk8r@gmail.com", "https://github.com/MilindDevX", "https://feedbackos.vercel.app/", "https://github.com/vks-g/cmapss-rul-hybrid", "https://github.com/MilindDevX/evalbar", "https://pypi.org/project/evalbar/", "https://github.com/MilindDevX/skipq"] {
    precondition(destinations.contains(destination), "Missing link: \(destination)")
}
for (destination, label) in [("https://portfolio-milind.vercel.app/ai", "Portfolio"), ("mailto:milindsk8r@gmail.com", "milindsk8r@gmail.com")] {
    let annotation = links.first { $0.url?.absoluteString == destination }!
    precondition(page.selection(for: annotation.bounds)?.string?.contains(label) == true, "Wrong clickable label: \(label)")
}
print("PASS: one page, current facts, \(links.count) clickable links")
