export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: number
          isSubscription: boolean | null
          subscriptionId: number
          userId: string
        }
        Insert: {
          amount?: number
          created_at?: string | null
          id?: number
          isSubscription?: boolean | null
          subscriptionId: number
          userId: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: number
          isSubscription?: boolean | null
          subscriptionId?: number
          userId?: string
        }
      }
      subscriptions: {
        Row: {
          created_at: string | null
          id: number
          name: string
          price: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string
          price?: number
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          price?: number
        }
      }
      userClicks: {
        Row: {
          created_at: string | null
          id: number
          numberOfClicks: number | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          numberOfClicks?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          numberOfClicks?: number | null
          user?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
