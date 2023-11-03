export interface Credentials {
  email?: string | undefined;
  password?: string | undefined;
  provider?: 'bitbucket' | 'github' | 'gitlab' | 'google' | undefined;
}

export interface Metadata {
  id?: number;
  created_at?: string;
  title?: string;
  abstract?: boolean;
}
