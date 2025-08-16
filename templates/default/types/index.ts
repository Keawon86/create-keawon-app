// Common types used throughout the application

export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: string
    message?: string
  }
}

export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

export interface Theme {
  name: 'light' | 'dark' | 'system'
  icon: React.ComponentType<{ className?: string }>
}

// Supabase database types (will be generated automatically)
export interface Database {
  public: {
    Tables: {
      // Add your table definitions here
    }
    Views: {
      // Add your view definitions here
    }
    Functions: {
      // Add your function definitions here
    }
  }
}
