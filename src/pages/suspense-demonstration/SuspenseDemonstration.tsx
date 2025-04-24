import React from 'react';
import { Suspense } from 'react';

// Simulate a delay for lazy loading
const LazyLoadedComponent = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                default: () => (
                    <>
                        <div>
                            <p>The page has been successfully loaded.</p>
                        </div>
                    </>
                ),
            });
        }, 5000);
    });
});

function SuspenseFallbackComponent(): React.JSX.Element {
    return (
        <div>
            <p>This is a demonstration of React Suspense.</p>
            <p>Waiting 5 seconds for the page to load...</p>
        </div>
    );
}

export default function SuspenseDemonstration(): React.JSX.Element {
    return (
        <>
            <h1>Suspense Demonstration</h1>
            <Suspense fallback={<SuspenseFallbackComponent />}>
                <LazyLoadedComponent />
            </Suspense>
        </>
    );
}
