"use client";

import ConditionalSidebar, {
  ConditionalSidebarRight,
  useRightSidebarVisible,
} from "@/components/layout/sidebar/ConditionalSidebar";

import ConditionalMainWrapper, {
  ConditionalMainWrapperNoRight,
} from "@/components/layout/ConditionalMainWrapper";

export default function ClientMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rightSidebarVisible = useRightSidebarVisible();

  return (
    <main className="lg:flex-1 lg:flex pt-16 lg:mx-auto lg:max-w-7xl lg:px-6">
      <ConditionalSidebar />

      {rightSidebarVisible ? (
        <ConditionalMainWrapper>{children}</ConditionalMainWrapper>
      ) : (
        <ConditionalMainWrapperNoRight>
          {children}
        </ConditionalMainWrapperNoRight>
      )}

      <ConditionalSidebarRight />
    </main>
  );
}
