import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  // eslint-disable-next-line
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    // eslint-disable-next-line react/prop-types
    const { children } = this.props
    if (hasError) {
      return (
        <Suspense fallback={''}>
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
