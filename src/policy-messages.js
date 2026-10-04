/**
 * Single source for the host-side policy strings that reach the terminal and
 * the agent tool results. They are user-facing Chinese today; migrating them
 * onto the client locale dictionaries (zh/en) is tracked in docs/roadmap.md.
 */

export function policyBlockedReason(category) {
  return `Blocked by the safety policy: ${category}. Do not retry or work around it; the operator must confirm execution in the terminal on the right.`;
}

/** Enter blocked because the local line mirror is untrustworthy. */
export const UNVERIFIED_LINE_REASON =
  "Blocked by the safety policy: the command or its completion could not be verified. Type a read-only diagnostic command manually.";

/** Prefix of the notice appended to the terminal buffer on a policy block. */
export const POLICY_NOTICE_PREFIX = "[DSH SSH safety policy]";

/** Default reason for the blocked-command confirmation card. */
export const DANGEROUS_DEFAULT_REASON = "Dangerous operation";
