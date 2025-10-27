import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "@tanstack/react-router";
import { useSettings } from "@/hooks/useSettings";
import { useTemplates } from "@/hooks/useTemplates";
import { TemplateCard } from "@/components/TemplateCard";
import { CreateAppDialog } from "@/components/CreateAppDialog";
import { NeonConnector } from "@/components/NeonConnector";
import { Template } from "@/shared/templates";

const HubPage: React.FC = () => {
  const router = useRouter();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { templates, isLoading } = useTemplates();
  const { settings, updateSettings } = useSettings();
  const selectedTemplateId = settings?.selectedTemplateId;

  const handleTemplateSelect = (templateId: string) => {
    updateSettings({ selectedTemplateId: templateId });
  };

  const handleCreateApp = () => {
    setIsCreateDialogOpen(true);
  };
  // Separate templates into official and community
  const officialTemplates =
    templates?.filter((template) => template.isOfficial) || [];
  const communityTemplates =
    templates?.filter((template) => !template.isOfficial) || [];

  const demoTemplates: Template[] = [
    {
      id: "erp_control_panel",
      title: "ERP Control Panel",
      description:
        "Build any dashboard or control panel by connecting to your ERP software",
      imageUrl:
        "https://cdn.dribbble.com/userupload/37369745/file/original-5b1790b6af6d90c752bb12a2243feaaa.png?resize=1504x1128&vertical=center",
      isOfficial: false,
    },
    {
      id: "wms_dashboard",
      title: "WMS Dashboard",
      description:
        "See warehouse stats in a single page. Build dashboards and monitors for your WMS",
      imageUrl:
        "https://cdn.dribbble.com/userupload/26042268/file/original-bf96ae1308d181aa77f00a2f6f23278e.png?resize=1504x1128&vertical=center",
      isOfficial: false,
    },
    {
      id: "rma_tools",
      title: "RMA Workflows",
      description:
        "Create RMA workflow tools that your customer support agents can use to create and manage RMA processes",
      imageUrl:
        "https://cdn.dribbble.com/userupload/16911311/file/original-056555dd17ec0c35e8ea42898e6e1e28.png?resize=2048x5791&vertical=center",
      isOfficial: false,
    },
    {
      id: "qr_scanner",
      title: "QR Scanner",
      description:
        "QR code scanner apps that can use either scanner devices or smartphones to scan for progress, status, or issues",
      imageUrl:
        "https://cdn.dribbble.com/userupload/33310548/file/original-d6c056b7112ddb9b32c537ff9f00ae0e.png?resize=2048x1536&vertical=center",
      isOfficial: false,
    },
    {
      id: "team_communication",
      title: "Team Communication",
      description:
        "Custom internal communication system with persistent storage and administration",
      imageUrl:
        "https://cdn.dribbble.com/userupload/17076932/file/original-354c7b6fedf19864330c02e58a0c9f2b.png?resize=2048x1536&vertical=center",
      isOfficial: false,
    },
    {
      id: "shift_manager",
      title: "Shift Scheduling",
      description:
        "Build shift scheduling system your employees can use both mobile and with a clock system, and syncs with HR systems",
      imageUrl:
        "https://cdn.dribbble.com/userupload/44252227/file/edfa412ce8126d745fc1c42aaa97514f.png?resize=2048x1536&vertical=center",
      isOfficial: false,
    },
  ];

  return (
    <div className="min-h-screen px-8 py-4">
      <div className="max-w-5xl mx-auto pb-12">
        <Button
          onClick={() => router.history.back()}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 mb-4 bg-(--background-lightest) py-5"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>
        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Pick your default template
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Choose a starting point for your new project.
            {isLoading && " Loading additional templates..."}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Supported templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demoTemplates.map((template, idx) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={idx === 1}
                onSelect={handleTemplateSelect}
                onCreateApp={handleCreateApp}
              />
            ))}
          </div>
        </section>

        {/* Official Templates Section */}
        {officialTemplates.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Official templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officialTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isSelected={template.id === selectedTemplateId}
                  onSelect={handleTemplateSelect}
                  onCreateApp={handleCreateApp}
                />
              ))}
            </div>
          </section>
        )}

        {/* Community Templates Section */}
        {communityTemplates.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Community templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isSelected={template.id === selectedTemplateId}
                  onSelect={handleTemplateSelect}
                  onCreateApp={handleCreateApp}
                />
              ))}
            </div>
          </section>
        )}

        <BackendSection />
      </div>

      <CreateAppDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        template={templates.find((t) => t.id === settings?.selectedTemplateId)}
      />
    </div>
  );
};

function BackendSection() {
  return (
    <div className="">
      <header className="mb-4 text-left">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Backend Services
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Connect to backend services for your projects.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <NeonConnector />
      </div>
    </div>
  );
}

export default HubPage;
