import { Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";
import { AppSidebar } from "@/Pages/MYComponent/app-sidebar";

export default function DashboardLayout() {

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
        {/* HEADER WITH BREADCRUMBS */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-white dark:bg-slate-950 px-4">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                  const isLast = index === pathSegments.length - 1;
                  const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                  
                  return (
                    <div key={href} className="flex items-center">
                      <BreadcrumbItem className="hidden md:block">
                        {isLast ? (
                          <BreadcrumbPage className="capitalize font-semibold text-emerald-600">
                            {segment.replace(/-/g, " ")}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={href} className="capitalize hover:text-emerald-500">
                            {segment.replace(/-/g, " ")}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && (
                        <BreadcrumbSeparator className="hidden md:block mx-2" />
                      )}
                    </div>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-slate-50 dark:bg-slate-950/50">
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min pt-6">
            <Suspense 
              fallback={
                <div className="h-full w-full flex items-center justify-center min-h-[400px]">
                  <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </div>

      </SidebarInset>
    </SidebarProvider>
  );
}
