export const recruitmentQuestions = {
	Software: `Please answer the integer that the variable result will hold in this Python code:

result = 0
for x in [3,3,5]:
  if x >= 3:
    result = result - x
  else:
    result = result + x`,
	Chassis: `Example Chassis Question: What is one safety consideration in chassis design?`
} as const;

export type QuestionTeam = keyof typeof recruitmentQuestions;
