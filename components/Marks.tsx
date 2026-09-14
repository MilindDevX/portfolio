export function ArrowMark({ down = false }: { down?: boolean }) {
  return <svg className={down ? "arrow-mark arrow-mark--down" : "arrow-mark"} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>;
}

export function AsteriskMark() {
  return <svg className="asterisk-mark" viewBox="0 0 80 80" aria-hidden="true"><path d="M40 4v72M9 22l62 36M71 22 9 58" /></svg>;
}
