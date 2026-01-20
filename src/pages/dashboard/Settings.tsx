import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Building, 
  Shield, 
  Webhook, 
  Bell,
  Camera,
  Mail,
  Lock,
  Smartphone
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
              <p className="text-muted-foreground mt-1">
                Manage your account and preferences.
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="bg-secondary/50 p-1">
                <TabsTrigger value="profile" className="gap-2">
                  <User className="w-4 h-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="organization" className="gap-2">
                  <Building className="w-4 h-4" />
                  Organization
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="notifications" className="gap-2">
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Profile Information</h3>
                  
                  {/* Avatar */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-semibold text-primary">
                        JD
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary">
                        <Camera className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Profile Picture</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG. Max 2MB</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </TabsContent>

              {/* Organization Tab */}
              <TabsContent value="organization" className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Organization Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input id="orgName" defaultValue="Acme Inc" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgSlug">Organization URL</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">crawlx.io/</span>
                        <Input id="orgSlug" defaultValue="acme" className="flex-1" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button>Save Changes</Button>
                  </div>
                </div>

                {/* Team Members */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Team Members</h3>
                    <Button size="sm">Invite Member</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "John Doe", email: "john@example.com", role: "Owner" },
                      { name: "Jane Smith", email: "jane@example.com", role: "Admin" },
                      { name: "Bob Wilson", email: "bob@example.com", role: "Member" },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{member.name}</p>
                            <p className="text-xs text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                          {member.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Password</h3>
                  
                  <div className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button>Update Password</Button>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-foreground">Two-Factor Authentication</h3>
                        <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Sessions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage your active sessions across devices.
                  </p>
                  <Button variant="outline" className="text-destructive">
                    Sign out all other sessions
                  </Button>
                </div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Email Notifications</h3>
                  
                  <div className="space-y-5">
                    {[
                      { title: "Crawl completed", description: "Receive an email when a crawl finishes" },
                      { title: "Crawl failed", description: "Get notified when a crawl encounters an error" },
                      { title: "Usage alerts", description: "Alerts when approaching usage limits" },
                      { title: "Weekly digest", description: "Summary of your crawling activity" },
                      { title: "Product updates", description: "News about new features and updates" },
                    ].map((notification, i) => (
                      <div key={i} className="flex items-center justify-between py-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.description}</p>
                        </div>
                        <Switch defaultChecked={i < 3} />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;