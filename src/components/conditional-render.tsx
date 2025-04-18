import React, { ReactNode } from 'react';

interface ConditionalRenderProps {
    /**
     * Whether the operation was successful
     */
    success: boolean;

    /**
     * Error object if operation failed
     */
    error: Error | null | undefined;

    /**
     * Child components to render if conditions are met
     */
    children: ReactNode;
}

/**
 * ConditionalRender component that conditionally renders its children
 * based on success and error props
 */
export const ConditionalRender: React.FC<ConditionalRenderProps> = ({
    success,
    error,
    children
}) => {
    // If success is false, show a loading state
    if (success && error) {
        return (
            <div className="error-container p-4 border border-red-500 rounded bg-red-100">
                <h3 className="text-lg font-bold text-red-700">Error</h3>
                <p className="text-red-600">{error.message || 'An unknown error occurred'}</p>
            </div>
        );
    }

    // Otherwise render the children
    return <>{children}</>;
};

export default ConditionalRender;

// Example usage:
/*
<ConditionalRender success={isLoaded} error={jobError}>
  <JobSelector jobTypes={jobTypes} />
  <StatusCard />
</ConditionalRender>
*/