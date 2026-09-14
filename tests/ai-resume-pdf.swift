// ABOUTME: Validates one-page AI resume output, selectable facts, and link annotations using PDFKit.
import Foundation
import PDFKit

let path = CommandLine.arguments.dropFirst().first ?? "docs/resumes/Milind_Bansal_AI_Internship_Resume.pdf"
guard let document = PDFDocument(url: URL(fileURLWithPath: path)) else { fatalError("Cannot open resume PDF") }
precondition(document.pageCount == 1, "Expected one page; got \(document.pageCount)")
let text = document.string ?? ""
for fact in ["Milind Bansal", "Portfolio", "Email", "Projects", "Python", "TruthLens", "FeedbackOS", "Beijing PM2.5", "43,824", "0.5648", "0.75", "9.28/10", "Hacktoberfest"] {
    precondition(text.localizedCaseInsensitiveContains(fact), "PDF text missing or fragmented: \(fact)")
}
precondition(!text.contains("nst.rishihood.edu.in"), "Private college address leaked")
precondition(!text.contains("AI Engineering Intern"), "Unnecessary role headline remains")
precondition(!text.contains("Selected Projects"), "Old projects heading remains")
precondition(!text.contains("Solo end-to-end project"), "Old ownership wording remains")
let page = document.page(at: 0)!
let college = document.findString("Newton School of Technology at Rishihood University", withOptions: []).first!
let cgpa = document.findString("CGPA: 9.28/10", withOptions: []).first!
let period = document.findString("2024-2028", withOptions: []).first!
let course = document.findString("B.Tech in Computer Science and Artificial Intelligence", withOptions: []).first!
precondition(abs(college.bounds(for: page).maxY-period.bounds(for: page).maxY) < 3, "Timeline is not aligned with college name")
precondition(abs(course.bounds(for: page).maxY-cgpa.bounds(for: page).maxY) < 3, "CGPA is not aligned with course name")
let links = document.page(at: 0)!.annotations.filter { $0.url != nil }
precondition(links.count >= 8, "Expected clickable contact and project links")
let destinations = links.compactMap { $0.url?.absoluteString }
for destination in ["https://portfolio-milind.vercel.app/ai", "mailto:milindsk8r@gmail.com", "https://feedbackos.vercel.app/", "https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview"] {
    precondition(destinations.contains(destination), "Missing hosted link: \(destination)")
}
for (destination, label) in [("https://portfolio-milind.vercel.app/ai", "Portfolio"), ("mailto:milindsk8r@gmail.com", "Email")] {
    let annotation = links.first { $0.url?.absoluteString == destination }!
    precondition(page.selection(for: annotation.bounds)?.string?.contains(label) == true, "Wrong clickable label: \(label)")
}
print("PASS: one page, selectable facts, \(links.count) clickable links, no private college address")
