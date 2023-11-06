export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Metadata {
  abstract: string
  dataset_created?: Date
  dataset_updated?: Date
  id?: number
  kind: string
  landing_page: string | null
  lineage: string
  owner_organization_id: number | null
  record_created?: Date
  record_updated: Date
  spatial_representation: string | null
  status: string
  title: string
  unique_identifier: string
  update_frequency: string
}
export interface Database {
  public: {
    Tables: {
      access_constraints: {
        Row: {
          id: number
          text: string
          type: Database['public']['Enums']['access_constraint_type']
        }
        Insert: {
          id?: number
          text: string
          type: Database['public']['Enums']['access_constraint_type']
        }
        Update: {
          id?: number
          text?: string
          type?: Database['public']['Enums']['access_constraint_type']
        }
        Relationships: []
      }
      base_record_access_constraints: {
        Row: {
          access_constraint_id: number
          base_record_id: number
        }
        Insert: {
          access_constraint_id: number
          base_record_id: number
        }
        Update: {
          access_constraint_id?: number
          base_record_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_access_constraints_access_constraint_id_fkey'
            columns: ['access_constraint_id']
            isOneToOne: false
            referencedRelation: 'access_constraints'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'base_record_access_constraints_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
        ]
      }
      base_record_contacts: {
        Row: {
          base_record_id: number
          individual_id: number
        }
        Insert: {
          base_record_id: number
          individual_id: number
        }
        Update: {
          base_record_id?: number
          individual_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_contacts_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'base_record_contacts_individual_id_fkey'
            columns: ['individual_id']
            isOneToOne: false
            referencedRelation: 'individuals'
            referencedColumns: ['id']
          },
        ]
      }
      base_record_graphic_overviews: {
        Row: {
          base_record_id: number
          graphic_overview_id: number
        }
        Insert: {
          base_record_id: number
          graphic_overview_id: number
        }
        Update: {
          base_record_id?: number
          graphic_overview_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_graphic_overviews_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'base_record_graphic_overviews_graphic_overview_id_fkey'
            columns: ['graphic_overview_id']
            isOneToOne: false
            referencedRelation: 'graphic_overviews'
            referencedColumns: ['id']
          },
        ]
      }
      base_record_keywords: {
        Row: {
          base_record_id: number | null
          id: number
          keyword: string
        }
        Insert: {
          base_record_id?: number | null
          id?: number
          keyword: string
        }
        Update: {
          base_record_id?: number | null
          id?: number
          keyword?: string
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_keywords_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
        ]
      }
      base_record_licenses: {
        Row: {
          base_record_id: number
          license_id: number
        }
        Insert: {
          base_record_id: number
          license_id: number
        }
        Update: {
          base_record_id?: number
          license_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_licenses_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'base_record_licenses_license_id_fkey'
            columns: ['license_id']
            isOneToOne: false
            referencedRelation: 'licenses'
            referencedColumns: ['id']
          },
        ]
      }
      base_record_themes: {
        Row: {
          base_record_id: number | null
          id: number
          theme: string
        }
        Insert: {
          base_record_id?: number | null
          id?: number
          theme: string
        }
        Update: {
          base_record_id?: number | null
          id?: number
          theme?: string
        }
        Relationships: [
          {
            foreignKeyName: 'base_record_themes_base_record_id_fkey'
            columns: ['base_record_id']
            isOneToOne: false
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
        ]
      }
      base_records: {
        Row: {
          abstract: string
          id: number
          kind: string
          landing_page: string | null
          owner_organization_id: number | null
          record_created: string | null
          record_updated: string
          title: string
          unique_identifier: string
        }
        Insert: {
          abstract: string
          id?: number
          kind: string
          landing_page?: string | null
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated: string
          title: string
          unique_identifier: string
        }
        Update: {
          abstract?: string
          id?: number
          kind?: string
          landing_page?: string | null
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated?: string
          title?: string
          unique_identifier?: string
        }
        Relationships: [
          {
            foreignKeyName: 'base_records_owner_organization_id_fkey'
            columns: ['owner_organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      dataset_records: {
        Row: {
          abstract: string
          dataset_created: string | null
          dataset_updated: string | null
          id: number
          kind: string
          landing_page: string | null
          lineage: string
          owner_organization_id: number | null
          record_created: string | null
          record_updated: string
          spatial_representation: string | null
          status: string
          title: string
          unique_identifier: string
          update_frequency: string
        }
        Insert: {
          abstract: string
          dataset_created?: string | null
          dataset_updated?: string | null
          id?: number
          kind: string
          landing_page?: string | null
          lineage: string
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated: string
          spatial_representation?: string | null
          status: string
          title: string
          unique_identifier: string
          update_frequency: string
        }
        Update: {
          abstract?: string
          dataset_created?: string | null
          dataset_updated?: string | null
          id?: number
          kind?: string
          landing_page?: string | null
          lineage?: string
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated?: string
          spatial_representation?: string | null
          status?: string
          title?: string
          unique_identifier?: string
          update_frequency?: string
        }
        Relationships: []
      }
      graphic_overviews: {
        Row: {
          description: string | null
          id: number
          url: string
        }
        Insert: {
          description?: string | null
          id?: number
          url: string
        }
        Update: {
          description?: string | null
          id?: number
          url?: string
        }
        Relationships: []
      }
      individuals: {
        Row: {
          address: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          organization_id: number | null
          phone: string | null
          position: string | null
          role: Database['public']['Enums']['role']
        }
        Insert: {
          address?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          organization_id?: number | null
          phone?: string | null
          position?: string | null
          role: Database['public']['Enums']['role']
        }
        Update: {
          address?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          organization_id?: number | null
          phone?: string | null
          position?: string | null
          role?: Database['public']['Enums']['role']
        }
        Relationships: [
          {
            foreignKeyName: 'individuals_organization_id_fkey'
            columns: ['organization_id']
            isOneToOne: false
            referencedRelation: 'organizations'
            referencedColumns: ['id']
          },
        ]
      }
      licenses: {
        Row: {
          id: number
          text: string
          url: string | null
        }
        Insert: {
          id?: number
          text: string
          url?: string | null
        }
        Update: {
          id?: number
          text?: string
          url?: string | null
        }
        Relationships: []
      }
      organizations: {
        Row: {
          description: string | null
          id: number
          logo_url: string | null
          name: string
          record_count: number | null
          website: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          logo_url?: string | null
          name: string
          record_count?: number | null
          website?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          logo_url?: string | null
          name?: string
          record_count?: number | null
          website?: string | null
        }
        Relationships: []
      }
      service_records: {
        Row: {
          abstract: string
          id: number
          kind: string
          landing_page: string | null
          owner_organization_id: number | null
          record_created: string | null
          record_updated: string
          title: string
          unique_identifier: string
        }
        Insert: {
          abstract: string
          id?: number
          kind: string
          landing_page?: string | null
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated: string
          title: string
          unique_identifier: string
        }
        Update: {
          abstract?: string
          id?: number
          kind?: string
          landing_page?: string | null
          owner_organization_id?: number | null
          record_created?: string | null
          record_updated?: string
          title?: string
          unique_identifier?: string
        }
        Relationships: [
          {
            foreignKeyName: 'service_records_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'base_records'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      access_constraint_type: 'security' | 'privacy' | 'legal' | 'other'
      role:
        | 'unspecified'
        | 'other'
        | 'author'
        | 'collaborator'
        | 'contributor'
        | 'custodian'
        | 'distributor'
        | 'editor'
        | 'funder'
        | 'mediator'
        | 'originator'
        | 'owner'
        | 'point_of_contact'
        | 'principal_investigator'
        | 'processor'
        | 'publisher'
        | 'resource_provider'
        | 'rights_holder'
        | 'sponsor'
        | 'stakeholder'
        | 'user'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
