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
    <main className="flex-1 flex pt-16 mx-auto max-w-7xl">
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
