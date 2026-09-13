// Presentation-only alias; authentication and resource paths still use account IDs.
export function getAccountDisplayName(accountId: string): string {
  return accountId === 'default' ? '华清未央' : accountId
}
