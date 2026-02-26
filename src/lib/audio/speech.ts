export function speakNumber(
  value: number
) {
  const u =
    new SpeechSynthesisUtterance(
      value.toString()
    );

  u.pitch = 1.3;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}