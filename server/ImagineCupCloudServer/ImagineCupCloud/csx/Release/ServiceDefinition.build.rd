<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="ImagineCupCloud" generation="1" functional="0" release="0" Id="23c0bb1c-d188-4800-9b7b-a4c6ee8bce22" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="ImagineCupCloudGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="ImagineCupServer:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/LB:ImagineCupServer:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="ImagineCupServer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/MapImagineCupServer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="ImagineCupServer:StorageAccountConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/MapImagineCupServer:StorageAccountConnectionString" />
          </maps>
        </aCS>
        <aCS name="ImagineCupServerInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/MapImagineCupServerInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:ImagineCupServer:Endpoint1">
          <toPorts>
            <inPortMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServer/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapImagineCupServer:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServer/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapImagineCupServer:StorageAccountConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServer/StorageAccountConnectionString" />
          </setting>
        </map>
        <map name="MapImagineCupServerInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServerInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="ImagineCupServer" generation="1" functional="0" release="0" software="E:\ImagineCup\ImagineCupCloudServer\ImagineCupCloud\csx\Release\roles\ImagineCupServer" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="1792" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="StorageAccountConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;ImagineCupServer&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;ImagineCupServer&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="ImagineCupServer.svclog" defaultAmount="[1000,1000,1000]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServerInstances" />
            <sCSPolicyFaultDomainMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServerFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyFaultDomain name="ImagineCupServerFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="ImagineCupServerInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="76f33182-4d4a-4e08-945c-6fcfae1472b3" ref="Microsoft.RedDog.Contract\ServiceContract\ImagineCupCloudContract@ServiceDefinition.build">
      <interfacereferences>
        <interfaceReference Id="14dd33ae-1032-474a-a2d7-768ebf2be124" ref="Microsoft.RedDog.Contract\Interface\ImagineCupServer:Endpoint1@ServiceDefinition.build">
          <inPort>
            <inPortMoniker name="/ImagineCupCloud/ImagineCupCloudGroup/ImagineCupServer:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>