// Solution One
// O(n^2) time | O(n^2) space
export function tournamentWinner(competitions: string[][], results: number[]) {
  const winners: any = {}
  const teams: any = []

  results.forEach((res: number, i: number) => {
    if (res === 0) {
      const winnerScore = winners[competitions[i][1]] ? winners[competitions[i][1]] + 3 : 3
      winners[competitions[i][1]] = winnerScore
      !(teams.indexOf(competitions[i][1]) >= 0) && teams.push(competitions[i][1])
    } else {
      const winnerScore = winners[competitions[i][0]] ? winners[competitions[i][0]] + 3 : 3
      winners[competitions[i][0]] = winnerScore
      !(teams.indexOf(competitions[i][0]) >= 0) && teams.push(competitions[i][0])

    }
  })
  let highScore = winners[teams[0]]
  let winner = teams[0]
  teams.forEach((team: string) => {
    if (winners[team] > highScore) {
      winner = team
    }
  })
  return winner
}
